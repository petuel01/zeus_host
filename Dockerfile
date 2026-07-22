# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY vite.config.ts ./
COPY index.html ./
COPY tailwind.config.js ./
COPY postcss.config.js ./

# Install dependencies
RUN npm ci

# Copy source code
COPY . .

# Build application
RUN npm run build

# Production stage
FROM node:18-alpine

# Install serve to run the app
RUN npm install -g serve

WORKDIR /app

# Copy built assets from builder
COPY --from=builder /app/dist ./dist

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Expose port
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Start application
CMD ["serve", "-s", "dist", "-l", "3000"]

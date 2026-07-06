# Use the official Nginx image
FROM nginx:alpine

# Remove the default Nginx web content
RUN rm -rf /usr/share/nginx/html/*

# Copy your HTML application into the Nginx web root
COPY index.html /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

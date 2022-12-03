# Build the Docker image for the current folder

docker build . -t <name of the image>

# Run the image in detached mode

# and map port 3000 inside the container with 3000 on current host

docker run -p 3000:3000 -d <the name of the image>

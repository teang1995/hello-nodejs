docker run --rm -itd -p 3000:3000 -v $(pwd)/demo:/code --name nodejs_test nodejs
docker exec -it nodejs_test /bin/sh

echo "If running on Ubuntu or WSL2, please run command 'sudo update-alternatives --config java' and select Java 8"
echo ""
echo "Building blog"
jekyll build
echo "Deploying blog to s3"
s3_website push
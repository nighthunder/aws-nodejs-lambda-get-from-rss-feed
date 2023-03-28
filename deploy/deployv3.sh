# creating the lambda zip
rm -r ../lambdas/retrieve-from-rss-feed-v2/retrieve-from-rss-feed-v2.zip 
cd ../lambdas/retrieve-from-rss-feed-v2/
zip -r retrieve-from-rss-feed-v2.zip .

# creating a lambda
aws lambda create-function --function-name retrieve-from-rss-feed-v3 --runtime nodejs18.x --role arn:aws:iam::385401615023:role/give-lambda-service-full-permissions-role --zip-file "fileb://D:/xampp/htdocs/aws-nodejs-lambda-get-from-rss-feed/lambdas/retrieve-from-rss-feed-v2.zip" --handler dist/index.handler --timeout 60 

# updating lambda code
aws lambda update-function-code --function-name retrieve-from-rss-feed-v3 --zip-file "fileb://D:/xampp/htdocs/aws-nodejs-lambda-get-from-rss-feed/lambdas/retrieve-from-rss-feed-v2.zip"

# aws remove a lambda
aws lambda delete-function --function-name retrieve-from-rss-feed-v3
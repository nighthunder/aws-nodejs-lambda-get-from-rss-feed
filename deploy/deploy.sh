aws lambda create-function --function-name retrieve-from-rss-feed-v2 --runtime nodejs18.x --role arn:aws:iam::385401615023:role/give-lambda-service-full-permissions-role --handler handler --zip-file "D:/xampp/htdocs/aws-nodejs-lambda-get-from-rss-feed/lambdas/retrieve-from-rss-feed-v2.zip" --timeout 60


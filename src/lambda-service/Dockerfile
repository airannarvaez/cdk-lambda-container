FROM public.ecr.aws/lambda/nodejs:16
# Alternatively, you can pull the base image from Docker Hub: amazon/aws-lambda-nodejs:16

# Copy the Lambda functions
COPY hello.mjs package.json ${LAMBDA_TASK_ROOT}/

# Install NPM dependencies for function
RUN npm install


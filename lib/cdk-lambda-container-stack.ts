import { CfnOutput, Stack, StackProps } from 'aws-cdk-lib';
import { DockerImageCode, DockerImageFunction } from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import path = require('path');

export class CdkLambdaContainerStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const helloFunction = new DockerImageFunction(this, 'helloFunction', {
      code: DockerImageCode.fromImageAsset(path.join(__dirname, '../src/lambda-service'), {
        cmd: ["hello.lambdaHandler"],
        entrypoint: ["/lambda-entrypoint.sh"],
      }),
      environment: {
        VARIABLE_1: 'this is the first variable!'
      },
    });

    new CfnOutput(this, 'Hello function name', {
      value: helloFunction.functionName
    });
  }
}

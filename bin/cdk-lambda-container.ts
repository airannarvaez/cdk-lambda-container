#!/usr/bin/env node
import 'source-map-support/register';
import { App } from 'aws-cdk-lib';
import { CdkLambdaContainerStack } from '../lib/cdk-lambda-container-stack';

const app = new App();
new CdkLambdaContainerStack(app, 'CdkLambdaContainerStack');
import { App, Stack } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { CdkLambdaContainerStack } from '../lib/cdk-lambda-container-stack';


describe("CdkLambdaContainerStack", () => {
    let app: App;
    let cdkLambdaContainerStack: Stack;
    let template: Template;

    beforeEach(() => {
        app = new App();

        // Create the CdkLambdaContainerStack.
        cdkLambdaContainerStack = new CdkLambdaContainerStack(app, 'CdkLambdaContainerStack');

        // Prepare the stack for assertions.
        template = Template.fromStack(cdkLambdaContainerStack);
    });

    test('Has two functions', () => {
        // Counts functions...
        template.resourceCountIs('AWS::Lambda::Function', 2);
    });

    test("Has Hello Function", () => {
        // Assert it creates the function with the correct properties...
        template.hasResourceProperties('AWS::Lambda::Function', {
            ImageConfig: {
                Command: ['hello.lambdaHandler']
            }
        });
    });

    test("Has PDF Function", () => {
        // Assert it creates the function with the correct properties...
        template.hasResourceProperties('AWS::Lambda::Function', {
            ImageConfig: {
                Command: ['pdf.lambdaHandler']
            }
        });
    });
});
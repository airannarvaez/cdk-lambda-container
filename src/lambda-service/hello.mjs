import pkg from 'lambda-log';
const { options, debug } = pkg;

export function lambdaHandler(event, context, callback) {
    options.debug = true;
    debug(event);

    let variable1 = process.env.VARIABLE_1;
    debug(`the variable1 is: ${variable1}`);

    // create a response
    const response = {
        statusCode: 200,
        body: 'Hello from lambda',
    };

    debug(response);
    callback(null, response);
}
import { ConsoleAdapter } from "botbuilder";

new ConsoleAdapter().listen(context => {
    
    if (context.activity.type === 'message') 
        context.sendActivity(` > ${context.activity.text}`);
})

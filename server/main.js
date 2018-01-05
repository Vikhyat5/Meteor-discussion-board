import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';


Meteor.startup(() => {
  // code to run on server at startup
  
  

});

Meteor.methods({
	'messages.insert'(text){

        if(!Meteor.userId()){
        	throw new Meteor.Error('not-authorized');
        }

        Messages.insert({
            text,
            createdAt:new Date(),
            username:Meteor.user().username,
            owner: Meteor.userId(),
            
      });

	}
});

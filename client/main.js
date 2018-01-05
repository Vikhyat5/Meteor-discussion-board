import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { Mongo } from 'meteor/mongo';
import './main.html';

  Template.registerHelper('formatDate', function(date){
    return moment(date).format('MM-DD-YYYY, h:mm:ss a');
  });

Template.messages.helpers({
    messages: function(){
       return Messages.find({},{sort:{createdAt: -1}});
    }
});

Template.add.events({
   'submit #messageform'(event){
      event.preventDefault();

      const target=event.target;
      const text=target.text.value;

      Meteor.call('messages.insert',text);

      return false;
   }
});
 
                 
import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { check } from 'meteor/check';
import { Cards } from './Cards.js';
import { Accounts } from 'meteor/accounts-base';


export const Decks = new Mongo.Collection('decks', { idGeneration: 'STRING' });

Decks.schema = new SimpleSchema({
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    autoValue() {
      if (this.isInsert) {
        return new Date;
      }
      return undefined;
    },
  },
});


Decks.attachSchema(Decks.schema);

if (Meteor.isServer) {  
  Meteor.publish('Decks.get', (Decks) => {
    if (Decks) {
      return Decks.find({_id: {$in: Decks}});
    }
  });
}

Meteor.methods({
  'Decks.create'(name) {
    if (Meteor.isServer) { 
      if (! this.userId) {
        throw new Meteor.Error('unauthorized-deck-create');
      }
      const newDeckId = Decks.insert({
        name: name,
        createdAt: new Date(),
      });
    }
  },

});

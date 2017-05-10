import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { check } from 'meteor/check';

export const Cards = new Mongo.Collection('cards', { idGeneration: 'STRING' });

Cards.schema = new SimpleSchema({
  front: {
    type: String,
  },
  back: {
    type: String,
  },
  deckId: {
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

Cards.attachSchema(Cards.schema);

if (Meteor.isServer) {  
   Meteor.publish('Cards.get', () => {
    return Cards.find();
  });
  // new stream that gets all Cards from all channels
  Meteor.publish('cardStream.get', (channelIds) => {
    if (channelIds) {
      //console.log(Cards.find({channelId: { $in: channelIds }}, {limit: 50}).fetch());
      return Cards.find({deckId: { $in: deckIds }});
    }
  });
}

Meteor.methods({
  'cards.insert'(frontText, backText) {
    const cardId = Cards.insert({
        front: frontText,
        back: backText,
        deckId: '0'
        createdAt: new Date(),
    });
  },
});

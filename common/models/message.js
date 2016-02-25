module.exports = function(Message) {
  Message.sendmessge = function(message,cb){
    Message.create(
      {'conten': message.content,
      'userId':message.user_id,
      'roomId':message.room_id,
      'posted_at':new Date()},
      function(err,mess){

      });
  };
};

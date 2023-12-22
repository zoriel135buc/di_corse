const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }


  let sentense=""
  for(const key in details){
    sentense= sentense+" "+key+ " "+ details[key]
  }
  console.log(sentense)
  
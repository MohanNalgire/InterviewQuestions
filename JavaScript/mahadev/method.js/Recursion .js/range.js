let range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    let list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(11,20));  //D:\InterviewQuestions\JavaScript\mahadev\method.js\Recursion .js\range.js

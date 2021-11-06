Simple cssPractice2

<img width="1436" alt="스크린샷 2021-11-06 오전 10 45 25" src="https://user-images.githubusercontent.com/66232436/140593749-d3e68841-c494-46ab-b060-8671a8115ac9.png">


```CSS
* {
    box-sizing: border-box;
    /* border : 1px solid gray; */
  }
  
  body {
    margin: 0;
    padding: 0;
  }

  #container {
      display : flex;
      padding : 3px;
      /* border: 1px dotted red; */
      min-height: 100vh;
  }

  #container .col {
    display : flex;
    padding : 3px;
    /* border: 1px solid green; */
    flex-direction: column;
  }

  #container .col .icon{
    margin : 3px;
    padding : 3px;
    border: 1px solid rgb(204, 136, 224);
    
  }

  #container .w10 {
      flex : 1;
      border: 1px solid red;
      padding : 3px;
      
  }

  #container .w20 {
    flex : 2;
    border: 1px solid orange;
    display: flex;
  }

  #container .w70 {
    flex : 7;
    border: 1px solid yellow;
  }

  #container .col .row {
      border : 1px solid skyblue;
  }
  #container .col .h40 {
    flex : 4;
    border: 1px solid yellowgreen;
  }
  
  #container .col .h20 {
    flex : 2;
  }

  #container .col .h80 {
    flex : 8;
  }
```

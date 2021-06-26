

***
query {
  hello() {}
}
***
query {
  session(user_id: "60d67fb70160bf019dfe8169", key: "key2"){
    id
    key
    value
  }
}
***
mutation add {
  addSession( user_id: "60d67fb70160bf019dfe8169", key: "key2",
   value: "hoge"
  ) {
    id
  }
}
***
deleteSession(user_id: String!, key: String): Session

mutation delete {
  deleteSession(user_id: "60d67fb70160bf019dfe8169", key: "key1") {
    id
  }
}
    
***



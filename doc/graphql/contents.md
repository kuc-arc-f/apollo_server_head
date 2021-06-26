

hello
***
query {
  hello() {}
}

***
query {
  contents(site_id: "60d41b918e3ada3040be0bd5" , content_name:"tasks") {
    id
    name
    values
    created_at
  }
}
***
query {
  content(id: "60d597caa266066086ab7980"){
    id
    values
  }
}
***
query {
  content_count(site_id: "60d41b918e3ada3040be0bd5" , content_name:"tasks")
}
***
mutation add {
  addContent( apikey: "MnszttA1V0mBdaTAgUSJqkPg", content_name: "tasks", 
  values: "{\"title\":\"t4\",\"content\":\"c4\"}"
  ) {
    id
  }
}
***
mutation update {
  updateContent(apikey: "MnszttA1V0mBdaTAgUSJqkPg", id: "60d5492afc4b5979aa1addcf",
   content_name: "tasks", values: "{\"title\":\"t4bb\",\"content\":\"c3\"}"
   ) {
    id
  }
}
***
mutation delete {
  deleteContent (apikey: "MnszttA1V0mBdaTAgUSJqkPg", id: "60d4501f53a2151d9284b667" ) {
    id
  }
}
    
***



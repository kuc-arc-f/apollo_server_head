

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
  }
}
***
query {
  content(id: "60d44f8bf3b2c21ca042dd8f"){
  }
}
***
content_count(site_id: String, content_name: String): Int
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



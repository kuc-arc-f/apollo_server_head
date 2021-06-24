
query {
  tasks {
    id
    title
  }
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
  content(id: "605528f6e4f76800a478478a"){
    id
    name
    values
  }
}


var ObjectID = require('mongodb').ObjectID;
import LibCommon from "../lib/LibCommon"
import LibMongo from "../lib/LibMongo"
import LibApiFind from "../lib/LibApiFind"
import LibApiCreate from "../lib/LibApiCreate"

export default {
  get_items :async function(args){
    try {
      var where ={
        site_id: args.site_id, name: args.content_name
      }      
      var items = await LibMongo.get_arrayWhere("contents" , where) 
      //items = LibCommon.convert_items(items)
      items = LibApiFind.convert_values(items) 
// console.log( items )            
      return items
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },    
  get_item :async function(id){
    try {
      var where = { _id: new ObjectID(id) }
      var item = await LibMongo.get_item("contents" , where ) 
      var ret ={
        item: item
      } 
      item.id = item._id  
      item.values = JSON.stringify( item.values )  
//console.log( item ) 
      return item
    } catch (err) {
      throw new Error('Error , get_item');
    }          
  },
  get_count :async function(args){
    try {
      var where ={
        site_id: args.site_id, name: args.content_name
      }
      var ret = await LibMongo.get_count("contents" , where)            
//console.log( ret )            
      return ret
    } catch (err) {
        throw new Error('Error , get_items');
    }          
  },

  add_item :async function(args){
    try {
      var where = { key:  args.apikey }
      var key = await LibMongo.get_item("apikeys" , where )
      if(key == null){ throw new Error('Invalid key , apikeys') } 
//console.log(key.site_id)
      const site_id = key.site_id
      const content_name = args.content_name
//console.log(content_name)
      var whereColumn = {
        site_id:  site_id, name: content_name,
      }
      const column = await LibMongo.get_item("columns" , whereColumn ) 
      var coluValues = JSON.parse(column.values || '[]')
//console.log(args.values)
      var values = args.values.replace(/'/g , '\"')
      values = JSON.parse(values || '[]')
// console.log(values)
      var newData = LibApiCreate.valid_post(values, coluValues)
      var item = {
        name: content_name,
        column_id: column._id.toString(),
        site_id: site_id,
        values: newData,
        user_id: "",
        created_at: new Date(),
      };  
      var itemOne = await LibMongo.add_item("contents" ,item )
      itemOne.id = itemOne._id
//console.log( itemOne )  
      return args
    } catch (err) {
      throw new Error('Error , add_item');
    }          
  },
  update_item :async function(args){
    try {
      var id = args.id
      if(typeof id =='undefined'){
        throw new Error('Invalid , id');
      }
      var where = { key:  args.apikey }
      var key = await LibMongo.get_item("apikeys" , where ) 
      if(key == null){ throw new Error('Invalid key , apikeys') } 
      var site_id = key.site_id
      var whereColumn = {
        site_id:  site_id, name: args.content_name,
      }
      const column = await LibMongo.get_item("columns" , whereColumn )   
      const coluValues = JSON.parse(column.values || '[]')
      var values = args.values.replace(/'/g , '\"')
      values = JSON.parse(values || '[]')
//console.log(values)      
      var newData = LibApiCreate.valid_post(values, coluValues)
      var whereContent = { "_id": new ObjectID( id ) };
      var content = await LibMongo.get_item("contents" , whereContent ) 
      content.values = newData
//console.log( content )
      await LibMongo.update_item("contents" , whereContent, content )       
      return args
    } catch (err) {
      throw new Error('Error , update_item');
    }          
  },
  delete_item :async function(args){
    try {
      var id = args.id
      if(typeof id =='undefined'){
        throw new Error('Invalid , id');
      }      
      var where = { key:  args.apikey }
      var key = await LibMongo.get_item("apikeys" , where ) 
      if(key == null){ throw new Error('Invalid key , apikeys') }      
      var where = { "_id": new ObjectID( id ) };
      await LibMongo.delete_item("contents" , where )
      return args
    } catch (err) {
      throw new Error('Error , delete_item');
    }          
  },  

}

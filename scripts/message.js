/** Script ACLs do not delete 
 read=nobody 
write=nobody
execute=authenticated 
  **/ 
 var log = require("log");
log.setLevel("DEBUG");
log.debug(request.rawBody);			
const Axios = require('axios').default;

module.exports = {
    sendWebhook: async (title, url, error) =>{

        //if url defined
        if(url && url.length > 0){

            //define embed for discord
            let Embed = {
                "embeds":[{
                    "title": `${title}`,
                    "color":  `${(error) ? (16711680) : (65280)}`
                }]
            };
            
            //send request via axios
            const Response = Axios({
                method: "post",
                url:url,
                data:Embed,
                headers:{
                    'Content-Type': `application/json;`
                }
            
            //catch errors
            }).catch((err) =>{
                console.log(err);
                
            })
            
        }else{
            return;
        }
    }
}

function handler(req, res){
    if(req.method === 'POST'){
        const {title, image, address, description} = req.body;
        const newMeetup = { title, image, address, description };
        
    }
}

export default handler;
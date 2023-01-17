exports.gettourHome = async (req, res, next)=>{
    res.send('User Profile')
}

exports.getAllTour = async (req, res, next)=>{
    res.send('All Tour')
}

exports.getSingleTour = async (req, res, next)=>{
    res.send('Single Tour')
}
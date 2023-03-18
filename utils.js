exports.parseOperands = function(req) {
    const params = req.query;
    return {
        x: parseFloat(params.x),
        y: parseFloat(params.y),
    };
}
const InternModel=require("../Models/InternModel")
const CollegeModel=require("../Models/CollegeModel")
const { isValid,isValidName,isValidEmail,isValidMobile }=require("../Validator/Valid")

const createIntern=async function(req,res){
try{

    if(Object.keys(req.body).length==0)  return res.status(400).send({ msg: "enter the data" })
       
    const {name,email,mobile,collegename} = req.body;

    if (!isValid(name)) {
        return res.status(400).send({ msg: "Enter First Name" })
    }
    if (!isValidName(name)) {
        return res.status(400).send({ msg: "fname only take alphabets" })
    }
    if (!isValid(email)) {
        return res.status(400).send({ msg: "Enter Email-Id" })
    }
    if (!isValidEmail(email)) {
        return res.status(400).send({ msg: "Enter valid email" })
    }
    if (!isValid(mobile))
        return res.status(400).send({ msg: "Enter mobile Number" })

    if (!isValidMobile(mobile)) {
        return res.status(400).send({ msg: "Enter valid mobile number" })
    }
    if (!isValid(collegename)) {
        return res.status(400).send({ msg: "Enter college fullName" })
    }
    if (!isValidName(collegename)) {
        return res.status(400).send({ msg: "fullName only take alphabets" })
    }

    const checkEmail=await InternModel.findOne({email:email})
        if(checkEmail) return res.status(400).send({msg :"Email Already Registered"})
        
        const data1=await CollegeModel.findOne({name:collegename})
        const data2=data1._id.toString()
        const data=req.body
        delete(data.collegename)
        data.collegeId=data2
        
      const data5=await InternModel.create(data)
      res.status(201).send({status:true , data : data5})
      

}catch(error){
    return res.status(500).send({status:false ,see:"server error", msg : error.messege})
}


}
module.exports.createIntern=createIntern




const Getcollegedetail = async (req, res) => {
    
    try {
        let data1 = req.query;

        if (Object.keys(data1).length == 0 )
            return res.status(400).send({ status: false, msg: "please inter valid details" });

        let data = req.query.collegeName;
        if (!data) return res.status(400).send({ status: false, msg: "Enter collegename" });

        let collagedata = await CollegeModel.findOne({ name: data, isDeleted: false });
        if (!collagedata) return res.status(404).send({ status: false, msg: "College is Not found!" });

        let collageid = collagedata._id.toString();
        let interns = await internModel.find({ collegeId: collageid, isDeleted: false }).select({ _id: 0, isDeleted: 0 });
        if (!interns) return res.status(404).send({ status: false, msg: "intern is Not found!" });

        let final = await CollegeModel.findOne({ name: data, isDeleted: false }).select({ _id: 0, isDeleted: 0 });

        final = JSON.parse(JSON.stringify(final));
        final.interns = interns;


        res.status(200).send({ status: true, data: final });
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message });
    }
};



module.exports.Getcollegedetail=Getcollegedetail
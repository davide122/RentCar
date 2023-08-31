import fotoauto1 from "../utlis/76ec73be-5584-4389-99ce-d8a2959a5a9a.jpg"
const CarComponent = () =>{
    return(
<div className="vh-100 bg-white d-block">
    <div className="container">
        <div className="row">
<div className="col-md-4 col-s-12">

<div className="Car">
   <img src={fotoauto1} alt="" className="image  my-2" /> 
<div className="d-flex justify-content-between mx-3">
<h3>Mercedes Benx </h3>
<button className="btn btn-success ">2021</button>
</div>
   <div className="informazioni">
<div className="container">
    <div className="row">
        <div className="col col-6">

        </div>
        <div className="col col-6">

        </div>
    </div>
</div>
   </div>
</div>
</div>
<div className="col-md-4 col-s-12">

</div>
<div className="col-md-4 col-s-12">

</div>''

        </div>
    </div>
</div>
    )
}
export default CarComponent;
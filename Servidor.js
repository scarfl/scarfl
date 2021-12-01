//console.log("Esta es mi pagina web");

const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();

const app=express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const TareaSchema=require("./modelos/Tarea")

//conexion a la BD
mongoose.connect("mongodb+srv://Valentina:jusva2021@clusterproyectociclo4.gcyju.mongodb.net/test");

//CRUD a la BD
router.get('/',(req,res)=>{
    res.send ("Aqui inicia mi API");
});

router.post('/tarea',(req,res)=>{
    let nuevaTarea=new TareaSchema({
        idTarea:req.body.id,
        nombreTarea:req.body.nombre,
        detalleTarea:req.body.detalle
    });
    nuevaTarea.save(function(err,datos){
        if(err){
            console.log(err);
        }
        res.send("Datos guardados exitosamente");
    });
});

router.get('/tarea',(req,res)=>{
    TareaSchema.find(function(err,datos){
        if(err){
            console.log("Error leyendo la base de datos");
        }else{
            res.send(datos);
        }
    });
});

app.use(router);
app.listen(3000,()=>{
    console.log("Server corriendo");
});
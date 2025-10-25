import { Notes } from "../models/Note.js";

export const createNote = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(400).json({
        message: "title and description cant be empty",
      });
    }

    const note = await Notes.create({
      title,
      description,
    });

    res.status(201).json({
      success: true,
      note,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find();

    res.status(200).json({
      success: true,
      notes,
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};


export const updateNote = async(req,res) => {
    try {
        const noteId = req.params.id
        const note = await Notes.findByIdAndUpdate( noteId, req.body,{new:true} )
        res.status(200).json({
            message:"Note Updated Successfully",
            note
        })
    } catch (error) {
        res.status(400).json({
      error: error.message,
    });
    }



}


export const deleteNote = async (req,res) => {
    try {
        const noteId = req.params.id
        

        if(!noteId){
            return res.status(400).json({
                message:"Note Id is required"
            })
        }
        const note = await Notes.findById(noteId)
        if(!note){
            return res.status(400).json({
                message:"Note Not Found"
            })
        }
        
        await Notes.findByIdAndDelete(noteId)
        res.status(204).json({
            message:"Note Deleted Successfully"
        })
    } catch (error) {
        res.status(400).json({
      error: error.message,
    });
    }
}

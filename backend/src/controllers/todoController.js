const todo = require("../models/todoModel");

const todoAdd = async (req, res) => {
  console.log(req.body);
  try {
    const _todo = await todo.findOne({ name: req.body.name });

    console.log(_todo);

    if (_todo) {
      return res.status(400).json({
        success: false,
        message: "Bu isimde kayıt mavcut",
      });
    }

    const todoAdd = new todo(req.body);

    await todoAdd
      .save()
      .then(() => {
        return res.status(201).json(todoAdd);
      })
      .catch((err) => {
        return res.status(400).json({
          success: false,
          message: "Kayıt Oluşturulurken Hata Çıktı: " + err,
        });
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Oluşturulmadı !",
    });
  }
};

const todoGetAll = async (req, res) => {
  try {
    const todoGetAll = await todo.find({});
    return res.status(200).json({
      success: true,
      data: todoGetAll,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Getirilmedi",
    });
  }
};

const todoUpdate = async (req, res) => {
  const { id } = req.params;

  try {
    const todoUpdate = await todo.findByIdAndUpdate(id, req.body);
    if (todoUpdate) {
      return res.status(200).json({
        success: true,
        message: "Güncelleme Başarılı",
      });
    } else
      return res.status(400).json({
        success: false,
        message: "Kayıt Güncellenemedi",
      });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Güncellenmedi",
    });
  }
};

const todoDelete = async (req, res) => {
  const { id } = req.params;
  try {
    const todoDelete = await todo.findByIdAndDelete(id);
    if (todoDelete) {
      return res.status(200).json({
        success: true,
        message: "Kayıt Başarıyla Silindi",
      });
    } else {
      return res.status(400).json({
        success: false,
        message: "Kayıt silinmedi",
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Kayıt Silinmedi",
    });
  }
};

const todoGet = async (req, res) => {
  const { id } = req.params;

  const todoGet = await todo.findById(id);
  if (todoGet) {
    return res.status(200).json(todoGet);
  } else {
    return res.status(404).json({
      success: false,
      message: "Kayıt bulunamadı",
    });
  }
};

module.exports = {
  todoAdd,
  todoGetAll,
  todoUpdate,
  todoDelete,
  todoGet,
};

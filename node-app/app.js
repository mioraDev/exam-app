const express = require("express");
const { Exam } = require("./models");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/api/exams", async (req, res) => {
  const exams = await Exam.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  });
  res.json(exams);
});

app.post("/api/exams", async (req, res) => {
  const { id, studentName, location, date, time, status } = req.body;

  try {
    // update
    if (id) {
      const updated = await Exam.update(
        {
          studentName,
          location,
          date,
          time,
          status,
        },
        {
          where: { id },
          returning: true,
        }
      );

      if (updated) {
        const updatedExam = await Exam.findOne({ where: { id } });
        const { createdAt, updatedAt, ...examData } = updatedExam.dataValues;
        res.status(200).json(examData);
      } else {
        res.status(404).json({ error: "Exam not found" });
      }
    } else {
      // Create a new exam
      const newExam = await Exam.create({
        studentName,
        location,
        date,
        time,
        status,
      });

      const { createdAt, updatedAt, ...examData } = newExam.dataValues;
      res.status(201).json(examData);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint to remove all exams data
app.delete('/exams', async (req, res) => {
  try {
    await Exam.destroy({ where: {}, truncate: true });
    res.status(200).json({ message: "All exams have been deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

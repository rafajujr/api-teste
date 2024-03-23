import Aluno from '../models/Aluno';

class AlunoController {
  // Index
  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.json(alunos);
  }

  // Show
  async show(req, res) {
    try {
      const { id } = req.param.id;

      if (!id) {
        return res.status(401).json({
          errors: ['Aluno não cadastrado'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não existe'],
        });
      }
      return res.send(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: ['Aluno não cadastrado'],
      });
    }
  }

  // Store
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.send(aluno);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Falta ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);
      console.log(aluno);

      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não existe'],
        });
      }

      const alunoUpdate = await aluno.update(req.body);
      return res.json(alunoUpdate);
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(401).json({
          errors: ['Aluno não cadastrado'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(401).json({
          errors: ['Aluno não existe'],
        });
      }

      await aluno.destroy();
      return res.send('Aluno apagado com sucesso');
    } catch (e) {
      return res.status(401).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new AlunoController();

# Cadastro de carro

  **RF**
    Deve ser possível cadastrar um novo carro;</br>
    Deve ser possível listar todas as categoria;</br>

  **RN**
    Não deve ser possível cadastra um carro com uma placa já existente;</br>
    Não deve ser possível alterar a placa de um carro já cadastrado;</br>
    O carro deve ser cadastrado com disponibilidade por padrão;</br>
    O Usuário responsável pelo cadastro deve ser um usuário administrador;</br>

# Listagem de carros

  **RF**
    Deve ser possível listar todos os carros disponíveis;</br>
    Deve ser possível listar todos os carros pelo nome da categoria;</br>
    Deve ser possível listar todos os carros pelo nome da marca;</br>
    Deve ser possível listar todos os carros pelo nome do carro;</br>

  **RN**
    O usuário não precisa estar logado no sistema;</br>

# Cadastro de especificação no carro

  **RF**
    Deve ser possível cadastrar uma especificação para um carro;</br>
    Deve ser possível listar todas as especificações;</br>
    Deve ser possível listar todos os carros

  **RN**
    Não deve ser possível cadastrar uma especificação para um carro não cadastrado;</br>
    Não deve ser possível cadastrar uma especificação já existente para o mesmo carro;</br>
    O Usuário responsável pelo cadastro deve ser um usuário administrador;</br>

# Cadastro de imagens do carro

  **RF**
    Deve ser possível cadastrar a imagem do carro;</br>
    Deve ser possível listar todos os carros;</br>

  **RNF**
    Utilizar o multer para upload dos arquivos

  **RN**
    O usuário deve poder cadastrar mais de uma imagem para o mesmo carro;</br>
    O usuário responsável pelo cadastro deve ser um usuário administrador;</br>

# Aluguel de carro

  **RF**
    Deve ser possível cadastrar um aluguel;</br>

  **RN**
    O aluguel deve ter uma duração minima de 24 horas;</br>
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto ara o mesmo usuário;</br>
    Não deve ser possível cadastrar um novo aluguel caso já exista um aberto ara o mesmo carro;</br>
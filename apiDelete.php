<?php
header("Content-Type: application/json; charset=UTF-8");

try {
    $endpoint = "https://crudcrud.com/api/";
    $token = "8def75fc586049f5b4f75cc6058f904c";
    $resource = "unicorns";
    $id = "69fb2593ee62c203e8571078";
    $APIbase = $endpoint . $token . "/" . $resource . "/" . $id;

    $opcoes = [
        "http" => [
            "method" => "DELETE",
            "ignore_errors" => true,
            "header" => "Content-Type: application/json\r\n"
        ],
        "ssl" => [
            "verify_peer" => false,
            "verify_peer_name" => false,
        ]
    ];
    
    $context = stream_context_create($opcoes);
    $response = file_get_contents($APIbase, false, $context);
    
    // O JSONPlaceholder retorna um objeto vazio {} em caso de sucesso no DELETE
    echo $response;
    http_response_code(200);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "message" => "Erro na requisição DELETE",
        "erro" => true,
        "mensagem" => $e->getMessage()
    ]);
}
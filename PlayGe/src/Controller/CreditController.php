<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

#[Route(path:'/game')]
class ApiController extends AbstractController
{
    #[Route('/win/{id}/{ganar}', name: 'winGame',  methods: ['POST'])]
    public function win(ManagerRegistry $doctrine, $ganar ,$id): JsonResponse
    {
        $repository = $doctrine->getRepository(User::class);
        $user = $repository->find($id);
        $user -> setCreditos($user -> getCreditos() + $ganar);
        
        return new JsonResponse($user -> getCreditos(), Response::HTTP_OK);
    }

    #[Route('/lose/{id}/{perder}', name: 'loseGame',  methods: ['POST'])]
    public function lose(ManagerRegistry $doctrine, $perder ,$id): JsonResponse
    {
        $repository = $doctrine->getRepository(User::class);
        $user = $repository->find($id);
        $user -> setCreditos($user -> getCreditos() - $perder);
        
        return new JsonResponse($user -> getCreditos(), Response::HTTP_OK);
    }
}

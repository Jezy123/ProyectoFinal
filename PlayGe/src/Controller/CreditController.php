<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

class CreditController extends AbstractController
{
    #[Route('/win/{id}/{ganar}', name: 'winGame',  methods: ['GET'])]
    public function win(EntityManagerInterface $entityManager,ManagerRegistry $doctrine, $ganar ,$id): JsonResponse
    {
        $repository = $doctrine->getRepository(User::class);
        $user = $repository->find($id);
        $user -> setCreditos($user -> getCreditos() + ($ganar/100));
        $entityManager->persist($user);
        $entityManager->flush();
        
        return new JsonResponse($user -> getCreditos(), Response::HTTP_OK);
    }

    #[Route('/lose/{id}/{perder}', name: 'loseGame',  methods: ['GET'])]
    public function lose(EntityManagerInterface $entityManager,ManagerRegistry $doctrine, $perder ,$id): JsonResponse
    {
        $repository = $doctrine->getRepository(User::class);
        $user = $repository->find($id);
        $user -> setCreditos($user -> getCreditos() - ($perder/100));
        $entityManager->persist($user);
        $entityManager->flush();
        
        return new JsonResponse($user -> getCreditos(), Response::HTTP_OK);
    }
}

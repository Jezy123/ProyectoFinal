<?php

namespace App\Form;

use App\Entity\User;
use phpDocumentor\Reflection\Types\String_;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\IsTrue;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Form\Extension\Core\Type\TextType;

class RegistrationFormType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email',TextType::class,[
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ])],
                'attr'=>['type'=>"email",
                        'class'=>'form-control',
                        'aria-describedby'=>'emialHelp',
                        'placeholder'=>"emailEjemplo@gmail.com"]
                
            ])
            
            ->add('telefono',TextType::class,[
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ])],

                'attr'=>[ 'type'=>"text",
                'class'=>"form-control",
                'aria-describedby'=>"emailHelp",
                'placeholder'=>"600102030",]
            ])

            ->add('userName',TextType::class,[
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ])],
                    
                'attr'=>['type'=>"text",
                        'class'=>"form-control",
                        'aria-describedby'=>"emailHelp",
                        'placeholder'=>"Usuario"],
            ])
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => ['type' =>"password",
                            'class'=>"form-control",
                            'id'=>"registroContrasena",
                            'placeholder'=>"Contraseña"],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 6,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
                
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}

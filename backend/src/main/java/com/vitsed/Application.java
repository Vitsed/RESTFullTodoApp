package com.vitsed;

import com.vitsed.repository.NoteRepository;
import com.vitsed.model.Note;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner init(NoteRepository noteRepository){
        return args -> {
            Note noteOne = new Note();
            noteOne.setRecord("Помыть посуду");
            noteRepository.save(noteOne);

            Note noteTwo = new Note();
            noteTwo.setRecord("Сходить за хлебом");
            noteRepository.save(noteTwo);
        };
    }
}

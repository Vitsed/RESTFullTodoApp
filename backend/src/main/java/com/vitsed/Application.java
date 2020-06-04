package com.vitsed;

import com.vitsed.dao.NoteDao;
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
    public CommandLineRunner init(NoteDao noteDao){
        return args -> {
            Note noteOne = new Note();
            noteOne.setRecord("Помыть посуду");
            noteDao.save(noteOne);

            Note noteTwo = new Note();
            noteTwo.setRecord("Сходить за хлебом");
            noteDao.save(noteTwo);
        };
    }
}

package com.vitsed.repository;

import com.vitsed.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteRepository extends JpaRepository<Note, Integer> {

    Note findByRecord(String record);
}

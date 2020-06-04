package com.vitsed.dao;

import com.vitsed.model.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NoteDao extends CrudRepository<Note, Integer> {

    Note findByRecord(String record);
}

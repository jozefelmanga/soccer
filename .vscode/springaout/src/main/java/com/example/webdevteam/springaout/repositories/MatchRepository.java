package com.example.webdevteam.springaout.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.webdevteam.springaout.models.MatchModel;

@Repository
public interface MatchRepository extends JpaRepository<MatchModel, Long>{

}

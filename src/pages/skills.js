import * as React from "react";
import { Container } from 'react-bootstrap';
import BasicLayout from '../layouts/BasicLayout';
import ListSkills from '../components/ListSkills';
import {
    frontEndSkills,
    frontEndSkillsColors,
    backEndSkills,
    backEndSkillsColors,
    soSkills,
    soSkillsColors
} from '../utils/skills';
import './skills.scss';

export default function Skills() {
    return (
        <BasicLayout menuColor="#000">
            <Container className="skills">
                <div className="skills__block">
                    <h2>Frontend</h2>
                    <ListSkills
                        skills={frontEndSkills}
                        colors={frontEndSkillsColors}
                    />
                </div>
                <div className="skills__block">
                    <h2>Backend</h2>
                    <ListSkills
                        skills={backEndSkills}
                        colors={backEndSkillsColors}
                    />
                </div>
                <div className="skills__block">
                    <h2>Sistemas Operativos</h2>
                    <ListSkills
                        skills={soSkills}
                        colors={soSkillsColors}
                    />
                </div>
                <hr />
            </Container>
        </BasicLayout>
    )
}
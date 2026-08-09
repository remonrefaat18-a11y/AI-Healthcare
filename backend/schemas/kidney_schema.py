from pydantic import BaseModel


class KidneyInput(BaseModel):
        age:int
        blood_pressure:float
        specific_gravity:float
        albumin:float
        sugar: float
        random_blood_glucose:float
        blood_urea:float
        serum_creatinine:float
        sodium:float
        potassium:float
        hemoglobin:float
        packed_cell_volume:float
        white_blood_cell_count:float
        red_blood_cell_count:float
        egfr:float
        urine_protein_creatinine_ratio:float
        urine_output:float
        serum_albumin:float
        cholesterol:float
        pth:float
        serum_calcium:float
        serum_phosphate:float
        bmi:float
        diabetes_duration:float
        hypertension_duration:float
        cystatin_c: float
        crp:float
        il6:float
        red_blood_cells:str
        pus_cells:str
        pus_cell_clumps:str
        bacteria:str
        hypertension:str
        diabetes_mellitus:str
        coronary_artery_disease:str
        appetite:str
        pedal_edema:str
        anemia:str
        family_history_ckd:str
        smoking_status: str
        physical_activity: str
        urinary_sediment:str
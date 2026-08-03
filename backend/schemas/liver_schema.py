from pydantic import BaseModel


class LiverInput(BaseModel):
    total_bilirubin: float
    direct_bilirubin: float
    alkphos: float
    sgpt: float
    sgot: float
    total_proteins: float
    albumin: float
    ag_ratio: float
import pandas as pd

def replace_na(arg, replacement_value=""):
    return arg if not pd.isnull(arg) else replacement_value

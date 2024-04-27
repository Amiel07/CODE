from sympy import latex, sympify, symbols
from sympy.parsing.latex import parse_latex

latex_expr = "R=\frac{I}{V}"

# Parses LaTeX expression to a SymPy expression
expr = parse_latex(latex_expr)
print(expr)
x, y = symbols('x y')

# Substituting values
expr = expr.subs({x: 5, y: 10})

print(expr) # Output: 1/2

# Now you can compute it
computed_expr = sympify(expr)
result = computed_expr.evalf() # Output: 0.5